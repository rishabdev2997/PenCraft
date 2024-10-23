export const Quote = ({ type }: { type: "signup" | "signin" }) => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 via-orange-50 to-transparent flex justify-center flex-col">
        <div className="grid row-auto justify-center">
          <div>
            <div className="max-w-lg text-3xl font-bold">
              {type === "signin"
                ? `“You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”`
                : `“The customer support I received was exceptional. The support team went above and beyond to address my concerns.”`}
            </div>
            <div className="mt-2 max-w-md text-left text-xl font-semibold">
              {type === "signin" ? "Steve Jobs" : "Julies Winfield"}
            </div>
            <div className="max-w-md text-left text-sm font-light text-slate-600">
              {type === "signin" ? "Co-founder | Apple Inc." : "CEO | Acme Corp"}
            </div>
          </div>
        </div>
      </div>
    );
  };
  