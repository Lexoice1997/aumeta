import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { useClientFileUpload } from '../../services/profileMutations'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

interface Props {
  afterUpload: (id: number) => void
}

export const ImageUpload: React.FC<Props> = ({ afterUpload }) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const upload = useClientFileUpload()

  const handleUpload = (options: any) => {
    const url = URL.createObjectURL(options.file)
    upload.mutateAsync([options.file]).then(resp => {
      setImageUrl(url)
      afterUpload(resp.data?.[0]?.id)
    })
  }

  const uploadButton = (
    <button disabled={upload.isPending} style={{ border: 0, background: 'none' }} type="button">
      {upload.isPending ? <LoadingOutlined /> : <PlusOutlined />}
    </button>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-circle"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      customRequest={handleUpload}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', opacity: upload.isPending ? '50%' : '100%', pointerEvents: upload.isPending ? 'none' : 'auto' }} /> : uploadButton}
    </Upload>
  );
};