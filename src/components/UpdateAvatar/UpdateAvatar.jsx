import css from "../UpdateAvatar/UpdateAvatar.module.css";
import Icon from "../ui/Icon";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserAvatar } from "../../redux/auth/operations";
import { useAuthSelector } from "../../hooks/useAuthSelector";

const UpdateAvatar = () => {
  const { user } = useAuthSelector();
  const dispatch = useDispatch();

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, PNG, and WEBP formats are allowed.");
      return;
    }

    try {
      await dispatch(updateUserAvatar(file)).unwrap();
      toast.success("Avatar updated successfully!");
    } catch (error) {
      toast.error(error?.message || "Failed to update avatar.");
    }
  };

  return (
    <div className={css.updateAvatarWrapper}>
      <h3 className={css.title}>Your photo</h3>
      <div className={css.uploadAvatar}>
        {user.avatarUrl ? (
          <img
            className={css.avatar}
            src={user.avatarUrl}
            width={80}
            height={80}
          />
        ) : (
          <div className={css.avatar}>
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : user.email.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <label className={css.upload} htmlFor="file-upload">
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
