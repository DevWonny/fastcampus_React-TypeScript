import { ForkOutlined } from "@ant-design/icons";
import { Button, Input, PageHeader, message as messageDialog } from "antd";
import { useRef } from "react";
import Layout from "./Layout";
import TextAreaType from "rc-textarea";
import { BookReqType } from "../types";
import styles from './Add.module.css';

const { TextArea } = Input;

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  add: (book:BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
  const titleRef = useRef<Input>(null);
  const messageRef = useRef<TextAreaType>(null);
  const authorRef = useRef<Input>(null);
  const urlRef = useRef<Input>(null);

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined /> Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button key="1" type="primary" onClick={logout} className={styles.button_logout}>
            Logout
          </Button>,
        ]}
      />

      <div className={styles.add}>
        <div  className={styles.input_title}>
          Title
          <span className={styles.required}>*</span>
          <div>
            <Input placeholder="Title" ref={titleRef} className={styles.input}/>
          </div>
        </div>

        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}>*</span>
          <div className={styles.input_area}>
            <TextArea rows={4} placeholder="Comment" ref={messageRef} className={styles.input}/>
          </div>
        </div>

        <div className={styles.input_author}>
          Author
          <span className={styles.required}>*</span>
          <div className={styles.input_area}>
            <Input placeholder="Author" ref={authorRef} className={styles.input}/>
          </div>
        </div>

        <div className={styles.input_url}>
          URL
          <span className={styles.required}>*</span>
          <div className={styles.input_area}>
            <Input placeholder="URL" ref={urlRef} className={styles.input}/>
          </div>
        </div>

        <div className={styles.button_area}>
          <Button size="large" loading={loading} onClick={click} className={styles.button}>
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );

  function click() {
    const title = titleRef.current!.state.value;
    const message = messageRef.current!.resizableTextArea.props.value as string;
    const author = authorRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (
      title === undefined ||
      message === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error('Please Fill Out All Inputs')
      return;
    }

    add({
      title,message, author, url,
    })
  }
};

export default Add;
