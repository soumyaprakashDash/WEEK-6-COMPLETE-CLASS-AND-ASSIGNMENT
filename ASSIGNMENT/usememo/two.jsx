import React, { useState, useMemo } from 'react';

const sentences = [
  "React is awesome",
  "useMemo is useful",
  "Hooks are great",
  "I love coding",
  "Learning React is fun",
  "React performance optimization"
];

function SentenceFilter() {
  const [filter, setFilter] = useState('');

  const filteredSentences = useMemo(() => {
    console.log('Filtering sentences...');
    return sentences.filter(sentence =>
      sentence.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]); // 2(d) multiple dependencies could go here if needed

  return (
    <div>
      <h2>Sentence Filter</h2>
      <input
        type="text"
        placeholder="Type to filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredSentences.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}

export default SentenceFilter;
