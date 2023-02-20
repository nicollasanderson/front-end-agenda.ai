import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerButtons,
  ContainerProfile,
  DivContent,
  SectionMain,
} from "./style";
import { CgProfile } from "react-icons/cg";
import { UsedUserrovider } from "../../providers/user";
import { UseTokenProvider } from "../../providers/token";
import MySchedulesModal from "../../components/MySchedulesModal";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [mySchedulesModal, setMySchedulesModal] = useState(false);
  const { user, setUser } = UsedUserrovider();
  const { setToken, token } = UseTokenProvider();

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  const handleMySchedules = () => {
    setMySchedulesModal(true);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <SectionMain>
      {mySchedulesModal && (
        <MySchedulesModal setMySchedulesModal={setMySchedulesModal} />
      )}
      <ContainerProfile>
        <DivContent>
          <div>
            {user && (
              <>
                {user.img ? (
                  <figure>
                    <img src="" alt="" />
                    <figcaption></figcaption>
                  </figure>
                ) : (
                  <CgProfile />
                )}
                <h1>{`${user.first_name} ${user.last_name}`}</h1>
                <ContainerButtons>
                  <button onClick={handleLogout}>Sair</button>
                  <button onClick={handleMySchedules}>Meus Agendamentos</button>
                </ContainerButtons>
              </>
            )}
          </div>
        </DivContent>
      </ContainerProfile>
    </SectionMain>
  );
};

export default Profile;
