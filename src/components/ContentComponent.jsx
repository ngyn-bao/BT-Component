const ContentComponent = () => {
  return (
    <section>
      <div className="_container mx-48">
        <div className="content grid grid-cols-3 mb-14">
          <div className="gridItem text-center px-10 mx-5 pb-10 bg-gray-100">
            <div className="itemImg text-center text-white rounded bg-blue-600 mb-3 -mt-6 w-16 h-16 text-2xl leading-11 mx-auto">
              <i className="fa-solid fa-book"></i>
            </div>
            <div className="context">
              <h2 className="font-bold text-2xl mb-3">Fresh new layout</h2>
              <p>
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
          </div>
          <div className="gridItem text-center px-10 mx-5 pb-10 bg-gray-100">
            <div className="itemImg text-center text-white rounded bg-blue-600 mb-3 -mt-6 w-16 h-16 text-2xl leading-11 mx-auto">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <div className="context">
              <h2 className="font-bold text-2xl mb-3">Free to download</h2>
              <p>
                As always, Start Bootstrap has a powerful collectin of free
                templates.
              </p>
            </div>
          </div>
          <div className="gridItem text-center px-10 mx-5 pb-10 bg-gray-100">
            <div className="itemImg text-center text-white rounded bg-blue-600 mb-3 -mt-6 w-16 h-16 text-2xl leading-11 mx-auto">
              <i class="fa-solid fa-message"></i>
            </div>
            <div className="context">
              <h2 className="font-bold text-2xl mb-3">Jumbotron hero header</h2>
              <p>
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>
          </div>
        </div>
        <div className="content grid grid-cols-3 mb-14">
          <div className="gridItem text-center px-10 mx-5 pb-10 bg-gray-100">
            <div className="itemImg text-center text-white rounded bg-blue-600 mb-3 -mt-6 w-16 h-16 text-2xl leading-11 mx-auto">
              <i class="fa-solid fa-b"></i>
            </div>
            <div className="context">
              <h2 className="font-bold text-2xl mb-3">Feature boxes</h2>
              <p>
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>
          </div>
          <div className="gridItem text-center px-10 mx-5 pb-10 bg-gray-100">
            <div className="itemImg text-center text-white rounded bg-blue-600 mb-3 -mt-6 w-16 h-16 text-2xl leading-11 mx-auto">
              <i class="fa-solid fa-code"></i>
            </div>
            <div className="context">
              <h2 className="font-bold text-2xl mb-3">Simple clean code</h2>
              <p>
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>
          </div>
          <div className="gridItem text-center px-10 mx-5 pb-10 bg-gray-100">
            <div className="itemImg text-center text-white rounded bg-blue-600 mb-3 -mt-6 w-16 h-16 text-2xl leading-11 mx-auto">
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="context">
              <h2 className="font-bold text-2xl mb-3">A name you trust</h2>
              <p>
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentComponent;
