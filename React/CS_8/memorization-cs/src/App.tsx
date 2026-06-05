import React, { useState, useMemo, useCallback } from 'react';

interface TagListProps {
  tags: string[];
  filter: string;
}

const TagList: React.FC<TagListProps> = React.memo(({ tags, filter }) => {
  console.log('Rendering TagList');
  const filteredTags = useMemo(() => {
    console.log('Filtering tags');
    return tags.filter(tag => tag.toLowerCase().includes(filter.toLowerCase()));
  }, [tags, filter]);

  return (
    <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
      {filteredTags.map((tag, index) => (
        <li key={index} style={{ padding: '4px 0' }}>{tag}</li>
      ))}
    </ul>
  );
});

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInput: React.FC<TagInputProps> = React.memo(({ onAddTag }) => {
  console.log('Rendering TagInput');
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAddTag(inputValue.trim());
      setInputValue('');
    }
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new tag...."
        style={{ marginRight: '8px' }}
      />
      <button onClick={handleAdd}>Add Tag</button>
    </div>
  );
});

const TagDashboard: React.FC = () => {
  // 1. Updated the initial state array to match your requirement
  const [tags, setTags] = useState<string[]>(['React', 'Zustand', 'Memoization']);
  const [filter, setFilter] = useState('');
  const [unrelatedState, setUnrelatedState] = useState<boolean>(false);

  const handleAddTag = useCallback((tag: string) => {
    setTags(prevTags => [...prevTags, tag]);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* 2. Updated the Header */}
      <h2>Memoization Challenge</h2>

      <button 
        onClick={() => setUnrelatedState(!unrelatedState)} 
        style={{ marginBottom: '20px', backgroundColor: unrelatedState ? 'lightgreen' : 'lightgrey' }}
      >
        Toggle Unrelated State (Current: {unrelatedState.toString()})
      </button>

      <div style={{ marginBottom: '20px' }}>
        {/* 3. Added the explicit label */}
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter tags:</label>
        <input 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* 4. Swapped the order! TagList is now above TagInput */}
      <TagList tags={tags} filter={filter} />
      <TagInput onAddTag={handleAddTag} />
      
    </div>
  );
};

export default TagDashboard;