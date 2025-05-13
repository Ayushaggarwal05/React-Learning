const Conatct = () => {
  return (
    <div>
      <h1 className="m-4 p-4 font-bold text-2xl">Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Conatct;
