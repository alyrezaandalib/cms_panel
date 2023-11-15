import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface AllFeaturesQuillEditorProps {
    content: string;
    onChange: (content: string) => void;
}

const AllFeaturesQuillEditor: React.FC<AllFeaturesQuillEditorProps> = ({ content, onChange }) => {
    const modules: QuillModules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered'}, { list: 'bullet' }, { indent: '-1'}, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
            ['code-block'],
            [{ script: 'sub'}, { script: 'super' }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['formula'],
            ['image', 'video'],
            ['emoji'],
            ['direction', { header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
        ],
        syntax: true,
        clipboard: {
            matchVisual: false,
        },
    };

    const formats: string[] = [
        'header',
        'font',
        'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
        'code-block',
        'script', 'color', 'background', 'align',
        'formula',
        'emoji',
        'direction',
    ];

    return (
        <ReactQuill
            style={{ border: 'none' }}
            className={'border-none h-[93%]'}
            theme="snow"
            value={content}
            onChange={onChange}
            modules={modules}
            formats={formats}
        />
    );
};

export default AllFeaturesQuillEditor;

interface QuillModules {
    toolbar: Array<Array<string | object>>;
    syntax: boolean;
    clipboard: {
        matchVisual: boolean;
    };
}
