import Icon from "../../ui/Icon";
import css from "./SettingModal.module.css";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../../redux/auth/selectors";

const UpdateAvatar = () => {
  // const userProfile = useSelector(selectUser);
  //  const dispatch = useDispatch();

  const [userProfile, setUserProfile] = useState({
    name: "Andrii",
    email: "m9ta@gmail.com",
    gender: "male",
    dailyNorm: "",
    avatarUrl: "",
  });
  console.log(userProfile);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    // dispatch(updateAvatar(formData));

    const reader = new FileReader();
    reader.onloadend = () => {
      setUserProfile((prevState) => ({
        ...prevState,
        avatarUrl: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={css.yourPhotoWrapper}>
      <h3 className={css.fontOne}>Your photo</h3>
      <div className={css.uploadWrapper}>
        {userProfile.avatarUrl ? (
          <img
            className={css.userPhoto}
            src={userProfile.avatarUrl}
            width={80}
            height={80}
          />
        ) : (
          <div className={css.userPhoto}>
            {userProfile.name
              ? userProfile.name.split("")[0].toUpperCase()
              : userProfile.email.split("")[0].toUpperCase()}
          </div>
        )}
        <div>
          <label className={css.uploadBtn} htmlFor="file-upload">
            <Icon name="icon-upload" width="16px" height="16px" />
            Upload a photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateAvatar;
