function Filters() {
    const cat=["Jeans","Mobile","Footwears","Cloths","Food"]
    return (
    <div className="overflow-auto h-[90vh]">
      <p className="font-bold text-xl font-serif px-4 pt-4">Filters</p>
      <div className="flex flex-col justify-center px-8 p-4 gap-6 ">
        <div>
          <p className="font-semibold text-lg font-serif">Categories</p>
          <div className="flex flex-col gap-2">
            {cat.map((c) => {
                return (
                    <div className="flex gap-4">
                  <input type="checkbox" />
                  <p className="font-medium text-slate-700">{c}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg font-serif">Price range</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="$5"
              className="placeholder:text-slate-500 border px-3 p-1 w-1/3 border-slate-500 rounded-sm"
              />
            <p className="text-slate-600">to</p>
            <input
              type="text"
              placeholder="$10"
              className="placeholder:text-slate-500 border px-3 p-1 w-1/3 border-slate-500 rounded-sm"
              />
          </div>
          <button className="bg-red-500 text-white font-medium text-base p-[6px] rounded-md">
            Set Price
          </button>
        </div>

        <div>
          <p className="font-semibold text-lg font-serif">Customer Ratings</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">4★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" />
              <p className="font-medium text-slate-700">3★ & above</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    );
}

export default Filters;