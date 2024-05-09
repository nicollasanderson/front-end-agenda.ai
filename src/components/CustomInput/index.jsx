import { StyledLabel, StyledMain } from "./style";

const CustomInput = ({
  errors,
  inputName,
  type = "text",
  register = false,
  registerName,
}) => {
  return (
    <StyledMain $errColor={errors[registerName] ? "red" : "#ccc"}>
      <StyledLabel
        htmlFor={registerName}
        $errColor={errors[registerName]?.message ? "red" : "black"}
      >
        {inputName} {errors[registerName]?.message}
      </StyledLabel>
      <input
        type={type}
        name={registerName}
        {...(register && { ...register(registerName) })}
      />
    </StyledMain>
  );
};

export default CustomInput;
