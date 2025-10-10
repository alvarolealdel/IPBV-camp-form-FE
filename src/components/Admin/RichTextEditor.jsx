import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  return (
    <div className="editor-container">
      <h3>Editor de texto</h3>
      <CKEditor
        editor={ClassicEditor}
        // config={{
        //   toolbar: ['heading', '|', 'bold', 'italic', 'link', 'undo', 'redo'],
        // }}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
      <div className="preview">
        <h4>Pré-visualização:</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichTextEditor;
