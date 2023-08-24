// this is child component

function ProfileCard({title, handle, image, description}) {
    // const title = props.title;
    // const handle = props.handle;

    //const { title, handle } = props;
    console.log(handle)
    return (
      <div className="card">
        <div className="crad-image">
          <figure className="image is-1by1">
            <img src={image} alt="pda logo" />
          </figure>
        </div>
        <div className="card-content">
          <div className="median-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
          <div className="content">
            {description}
          </div>
        </div>
      </div>
    );
}

export default ProfileCard;