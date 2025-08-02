import React from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const LinkTable = () => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    const fetchLinks = async () => {
      const querySnapshot = await getDocs(collection(db, "links"));
      const linksData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLinks(linksData);
    };

    fetchLinks();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "links", id));
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map(link => (
            <tr key={link.id}>
              <td>{link.id.substring(0, 6)}...</td>
              <td>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </td>
              <td>{new Date(link.createdAt?.toDate()).toLocaleString()}</td>
              <td>
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(link.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkTable;
