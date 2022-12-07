const Card = () => {
  return (
    <div    >
      <div className="overflow-hidden">
        <img
          className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-110"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Shoes"
        />
      </div>

      <div className="pt-3 pb-1.5 flex flex-col gap-3">
        <h5>Limited Edition Sports Trainer</h5>
        <div className="flex justify-between items-center">
          <p>$189.99</p>
          <p>6 Colors</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
