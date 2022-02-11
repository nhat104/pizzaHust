import { Box, CircularProgress } from '@mui/material';
import ListItem from 'features/HomePage/components/ListItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBtn from '../../components/SearchBtn';

export default function Search() {
  const { search } = useParams();

  const [pizzaResponse, setPizzaResponse] = useState([]);
  const [sideResponse, setSideResponse] = useState([]);
  const [comboResponse, setComboResponse] = useState([]);

  // API
  const [loading, setLoading] = useState(0);
  const pizzaSearch = 'http://127.0.0.1:8000/piza/?search=' + search.slice(7);
  const sideSearch = 'http://127.0.0.1:8000/side/?search=' + search.slice(7);
  const comboSearch = 'http://127.0.0.1:8000/combo/?search=' + search.slice(7);

  useEffect(() => {
    async function getData() {
      const responsePizza = await fetch(pizzaSearch);
      setPizzaResponse(await responsePizza.json());
      setLoading(1);

      const responseSide = await fetch(sideSearch);
      setSideResponse(await responseSide.json());
      setLoading(2);

      const responseCombo = await fetch(comboSearch);
      setComboResponse(await responseCombo.json());
      setLoading(3);
    }

    getData();
  }, [comboSearch, pizzaSearch, sideSearch]);

  const data = [...pizzaResponse, ...sideResponse, ...comboResponse];

  return (
    <div>
      {search.length > 7 && (
        <Box sx={{ mt: 2 }}>
          <SearchBtn />
          <Box sx={{ mt: 4, mb: 6, textAlign: 'center' }}>
            <Box>Hiển thị kết quả tìm kiếm cho {search.slice(7)}</Box>
            <Box>Có {data.length} kết quả.</Box>
          </Box>
          {loading === 3 ? (
            <>
              <ListItem listItem={data} />
            </>
          ) : (
            <Box style={{ textAlign: 'center' }}>
              <CircularProgress
                color="success"
                style={{ margin: '20px auto' }}
              />
            </Box>
          )}
        </Box>
      )}
    </div>
  );
}
