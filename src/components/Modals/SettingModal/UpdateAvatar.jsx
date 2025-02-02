import Icon from "../../ui/Icon";
import css from "./SettingModal.module.css";
import { useState } from "react";

const UpdateAvatar = () => {
  // const userProfile = useSelector();
  // const dispatch = useDispatch();

  const [image, setImage] = useState(null); // temporary

  const handleImageChange = (event) => {
    const formaData = new FormData();
    formaData.append("avatar", event.target.files[0]);
    const file = event.target.files?.[0];

    if (!file) return;

    // if (file) {
    //   dispatch(updateAvatar(formaData));
    // }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={css.yourPhotoWrapper}>
      <h3 className={css.fontOne}>Your photo</h3>
      <div className={css.uploadWrapper}>
        {/* {!userProfile.avatarURL && (
          <div>
            {userProfile.userName
              ? userProfile.userName.split("")[0].toUpperCase()
              : "V"}
          </div>
        )}
        {userProfile.avatarURL && (
          <img src={userProfile.avatarURL} width={80} height={80} />
        )} */}
        {image ? (
          <img className={css.userPhoto} src={image} width={80} height={80} />
        ) : (
          <div className={css.userPhoto}>V</div>
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
