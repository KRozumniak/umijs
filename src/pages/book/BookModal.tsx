import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import BookUpdateForm from "@/pages/book/BookUpdateForm";

export default function App (props: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="ghost" onClick={showModal}>
        Update
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <BookUpdateForm
          id={props.id}
          showModal={setIsModalVisible}
        />
      </Modal>
    </>
  );
};
