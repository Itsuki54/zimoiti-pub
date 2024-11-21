import { on } from 'events';
import pica from 'pica';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Avatar from 'react-avatar';
import AvatarEditor from 'react-avatar-editor';
import { MdDriveFolderUpload } from 'react-icons/md';
import { IconEditor } from './IconEditor';
import { ModalComponent } from './Modal';

export function ImageUploader({
  image,
  id,
  setImage,
}: {
  id: string;
  image: string;
  setImage: Function;
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [imageURL, setImageURL] = useState(image);
  const [images, setImages] = useState<File[]>([]);

  const [icon, setIcon] = useState<File | null>(null);
  const [previewIcon, setPreviewIcon] = useState<File | null>(null);
  const iconInputRef = useRef<HTMLInputElement | null>(null);

  const editorRef = useRef<AvatarEditor | null>(null);
  const [scale, setScale] = useState(1);

  async function save() {
    console.log('save', imageURL);
    setImage(imageURL);
    setIsDisabled(false);
  }

  const onSubmit = async () => {
    console.log('onSubmit', imageURL);
    const formData = new FormData();
    for (const image of images) {
      formData.append('files', image);
    }
    const post = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const res = await post.json();
    console.log('res', res);
    setImageURL(res.data[0].toString().replace('./public', ''));
  };

  useEffect(() => {
    console.log('useEffect', imageURL);
    if (!imageURL) return;
    (async () => {
      await save();
    })();
  }, [imageURL]);

  const handleClickChangeIcon = useCallback(() => {
    console.log('handleClickChangeIcon', iconInputRef.current);
    if (!iconInputRef.current) return;
    iconInputRef.current.click();
  }, []);

  // アイコンプレビュー変更ハンドラ
  const handleChangePreviewIcon = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log('handleChangePreviewIcon', e.target.files?.length);
      if (!e.target.files?.length) return;
      setPreviewIcon(e!.target!.files[0]!);
      e.currentTarget.value = '';
    },
    [],
  );

  // アイコン変更ハンドラ
  const handleChangeIcon = useCallback((nextIcon: File) => {
    setIcon(nextIcon);
  }, []);

  useEffect(() => {
    setImages([icon!]);
  }, [icon]);

  // ファイル保存ハンドラ
  const handleClickFileSave = useCallback(async () => {
    console.log('handleClickFileSave', previewIcon);
    if (!editorRef.current) return;
    const canvas = editorRef.current.getImageScaledToCanvas();
    const picaResizer = pica();
    const resizedCanvas = await picaResizer.resize(canvas, canvas);
    resizedCanvas.toBlob(blob => {
      if (blob) {
        const nextFile = new File([blob], previewIcon!.name, {
          type: previewIcon!.type,
          lastModified: Date.now(),
        });
        handleChangeIcon(nextFile);
      }
    });
    setPreviewIcon(null);
    if (previewIcon) onSubmit();
  }, [previewIcon, handleChangeIcon]);

  // スケール変更
  const handleChangeScale = useCallback((value: number) => {
    setScale(value);
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }, [images]);

  return (
    <div className='h-full my-4'>
      <div className='block'>
        <div className='w-full md:w-2/5'>
          <div className='flex-col'>
            <Avatar
              size='160'
              name='アイコン'
              textSizeRatio={2}
              color='#ddd'
              alt='アイコン'
              src={icon ? URL.createObjectURL(icon) : image}
            />
            <input
              type='file'
              accept='image/*, .png, .jpg, .jpeg, .gif, .svg'
              style={{ display: 'none' }}
              ref={iconInputRef}
              onChange={handleChangePreviewIcon}
            />
          </div>
          <ModalComponent
            title='アイコン編集'
            previewIcon={!!previewIcon}
            setPreviewIcon={setPreviewIcon}
          >
            <IconEditor
              {...{
                previewIcon,
                editorRef,
                scale,
                handleChangeScale,
                handleClickFileSave,
              }}
            />
          </ModalComponent>
        </div>
      </div>
      <div className='flex justify-end mt-4 gap-2'>
        <button
          type='button'
          onClick={handleClickChangeIcon}
          className='px-4 py-2 flex font-bold items-center gap-2 bg-white text-black rounded-lg duration-150 hover:opacity-80'
        >
          <MdDriveFolderUpload style={{ fontSize: '32px' }} />
          <span>アップロード</span>
        </button>
      </div>
    </div>
  );
}
