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

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser } = UsedUserrovider();
  const { setToken, token } = UseTokenProvider();

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <SectionMain>
      <ContainerProfile>
        <ContainerButtons>
          <button onClick={handleLogout}>Sair</button>
          <button>Meus Agendamentos</button>
        </ContainerButtons>
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
              </>
            )}
          </div>
          <div></div>
        </DivContent>
      </ContainerProfile>
    </SectionMain>
  );
};

export default Profile;
