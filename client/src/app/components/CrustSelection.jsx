


const CrustSelection = ({crust, setCrust}) => {
  return (
    <div className="flex justify-center items-center lg:justify-start  ">
      {/* crust */}
      <div className="flex gap-x-12 mb-8 font-medium">
        {/* traditional */}
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
          name="crust"
          value='traditional'
          checked={crust === 'traditional'}
           type="radio"
           onChange={(e) => setCrust(e.target.value)}
           className="appearance-none w-4 h-4 border border-gray-400 cursor-pointer
           rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary  "
            />
            Traditional
        </label>
        
        {/* thin */}
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
          name="crust"
          value='thin'
          checked={crust === 'thin'}
           type="radio"
           onChange={(e) => setCrust(e.target.value)}
           className="appearance-none w-4 h-4 border border-gray-400 cursor-pointer
           rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary  "
            />
            Thin
        </label>
      </div>
    </div>
  )
};

export default CrustSelection;
