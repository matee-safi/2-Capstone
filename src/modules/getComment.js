const getComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9uvruX8VsHf7B0nGETkN/comments?item_id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export default getComments;