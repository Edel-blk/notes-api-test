const express = require('express');
const logger = require('./loggerMiddleware');
const app = express();

app.use(express.json());
app.use(logger);

let notes = [
  {
    'id': 1,
    'content': 'Es el primero',
    'date': '2019-05-30',
    'important': true
  },
  {
    'id': 2,
    'content': 'Es el segundo',
    'date': '2019-05-30',
    'important': false
  },
  {
    'id': 3,
    'content': 'Es el tercero por que si',
    'date': '2019-05-30',
    'important': true
  }
];

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(notes));
// });

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.filter(note => note.id !== id);
  response.status(204).end();
});

app.post('/api/notes', (request, response) => {
  const note = request.body;

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing'
    });
  }

  const ids = notes.map(note => note.id);
  const maxId = Math.max(...ids);

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== undefined ? note.important : false,
    date: new Date().toISOString()
  };

  notes = [...notes, newNote];

  response.json(newNote);
});

app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  });
});

const PORT =  process.env.port || 3001;

app.listen(PORT);
console.log(`Server running on port ${PORT}`);