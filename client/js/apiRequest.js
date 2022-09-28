(() => {
  const fetchData = async () => {
    fetch(`http://localhost:8000/api/interns/all`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchData();
})();
