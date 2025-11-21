import { Link } from "react-router-dom";      
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  if (!friend) return null;   

  const {
    profilePic = "/default-avatar.png",
    fullName = "Unknown User",
    nativeLanguage = "",
    learningLanguage = "",
    _id
  } = friend;

  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4">

        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12 rounded-full overflow-hidden">
            <img src={profilePic} alt={fullName} />
          </div>
          <h3 className="font-semibold truncate">{fullName}</h3>
        </div>

        {/* LANGUAGE BADGES */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {nativeLanguage && (
            <span className="badge badge-secondary text-xs flex items-center gap-1">
              {getLanguageFlag(nativeLanguage)}
              Native: {nativeLanguage}
            </span>
          )}

          {learningLanguage && (
            <span className="badge badge-outline text-xs flex items-center gap-1">
              {getLanguageFlag(learningLanguage)}
              Learning: {learningLanguage}
            </span>
          )}
        </div>

        {/* MESSAGE BUTTON */}
        {_id && (
          <Link to={`/chat/${_id}`} className="btn btn-outline w-full">
            Message
          </Link>
        )}
      </div>
    </div>
  );
};

export default FriendCard;


export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (!countryCode) return null;

  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode}.png`}
      alt={`${langLower} flag`}
      className="h-3 inline-block"
    />
  );
}
