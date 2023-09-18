const express = require('express');
const empleadoRoutes = require('./routes/empleadoRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
const app = express();
const cors = require('cors');

// allow all localhost too

app.use(cors());

// env
// require('dotenv').config();

app.use(express.json());
app.use('/api', empleadoRoutes);
app.use('/api', cargoRoutes);

// Nueva ruta aquí
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
