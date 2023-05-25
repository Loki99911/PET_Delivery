import { RestAside, RestLink } from "./RestList.styled";

export const RestList = ({ restNames }) => {
  return (
    <RestAside>
      {restNames.map(name => (
        <RestLink key={name} to={`${name}`}>
          {name}
        </RestLink>
      ))}
    </RestAside>
  );
};
