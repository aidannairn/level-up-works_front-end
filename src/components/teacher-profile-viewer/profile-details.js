export default function ProfileDetails({
    item: { FirstName, LastName, ContactNumber, DateOfBirth, Email, School },
}) {
    return (
        <>
            <div className="profile-d-body">
                <div className="profile-d-top">
                    <h1>
                        {FirstName} {LastName}
                    </h1>
                </div>
                <div className="profile-d-mid">
                    <div className="profile-d-mid-left">
                        <p>School</p>
                        <p>Courses Purchased</p>
                        <p>Date of Birth</p>
                        <p>Contact No</p>
                        <p>Email Address</p>
                    </div>
                    <div className="profile-d-mid-right">
                        <p>{School}</p>
                        <p>Beginner</p>
                        <p>{DateOfBirth}</p>
                        <p>{ContactNumber}</p>
                        <p>{Email}</p>
                    </div>
                </div>
                <div className="profile-d-bottom"></div>
            </div>
        </>
    );
}
