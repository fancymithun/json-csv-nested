# Usage
```js
const convertJSONtoCSV = require('json-csv-nested')

const items = [
  {
    downloaded: false,
    contact: {
      company: 'New Widgets, Inc',
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1-123-456-7890',
    },
    registration: {
      year: 2013,
      level: 3,
    },
  },
  {
    downloaded: true,
    contact: {
      company: 'New Sprockets, LLC',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1-987-654-3210',
    },
    registration: {
      year: 2013,
      level: 2,
    },
  },
];


const csvData = convertJSONtoCSV(items);

console.log(csvData);