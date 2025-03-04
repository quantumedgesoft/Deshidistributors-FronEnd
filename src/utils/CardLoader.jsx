const CardLoader = () => {
  return (
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="row g-4">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="col-md-6 col-lg-4 col-xl-3">
              <div
                className="rounded position-relative fruite-item overflow-hidden border border-secondary placeholder-glow w-100 bg-secondary"
                style={{
                  height: "380px",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
