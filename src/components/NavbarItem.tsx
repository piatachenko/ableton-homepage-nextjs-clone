function NavbarItem(props: { value: string }) {
  return (
    <a href={`https://www.ableton.com/en/${props.value.toLowerCase()}/`}>
      <div>
        <p>
          <span>{props.value}</span>
        </p>
      </div>
    </a>
  );
}

export default NavbarItem;
