import pool from '../lib/db';

export async function getServerSideProps() {
  try {
    // இங்கே, SQL Query-ல் 'image URL' என்பதை 'image' என்று மாற்றியுள்ளேன்.
    // ஏனென்றால், நீங்கள் டேபிளில் உள்ள பெயர்களை மாற்றியுள்ளீர்கள்.
    const [rows] = await pool.execute('SELECT name, address, city, image FROM schools');
    return {
      props: {
        schools: rows,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        schools: [],
      },
    };
  }
}

export default function ShowSchools({ schools }) {
  return (
    <div>
      <h1>Schools List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {schools.map((school) => (
          <div key={school.id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
            <img src={school.image} alt={school.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{school.name}</h3>
            <p>{school.address}, {school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}