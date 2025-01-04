import { hotelTypes } from "../config/hotel-options-config";

type Props = {
    selectedHotelTypes: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const HotelTypeFilter = ({selectedHotelTypes, onChange}: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
        <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
        {hotelTypes.map((hoteType) => (
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" value={hoteType} checked={selectedHotelTypes.includes(hoteType)} onChange={onChange}/>

                <span>{hoteType}</span>
                
            </label>
        ))}
    </div>
  );
};

export default HotelTypeFilter;