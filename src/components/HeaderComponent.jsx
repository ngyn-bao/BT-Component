const HeaderComponent = () => {
  return (
    <header className="py-20">
      <div className="_container mx-48">
        <div className="content  text-center p-20 bg-slate-100 rounded-xl">
          <h2 className="text-5xl mb-5 font-bold">A warm welcome!</h2>
          <p className="text-2xl  mb-5 ">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn bg-blue-500 text-xl text-white py-3 px-4 rounded">
            Call to action
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
