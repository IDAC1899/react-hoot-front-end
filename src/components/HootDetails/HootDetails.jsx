// src/components/HootDetails/HootDetails.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import * as hootService from '../../services/hootService';

const HootDetails = () => {
  const { hootId } = useParams();
  const [hoot, setHoot] = useState(null);

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      setHoot(hootData);
    };
    fetchHoot();
  }, [hootId]);

  return <main>Hoot Details</main>;
};

export default HootDetails;