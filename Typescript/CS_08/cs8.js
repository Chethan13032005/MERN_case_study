// task 2: Create two profiles: one with a null bio and no avatar, and one with both fields set.
var profile1 = {
    username: "Chethan",
    bio: null
};
var profile2 = {
    username: "Ram",
    bio: "Loves coding",
    avatarUrl: "http://example.com/avatar.jpg"
};
// task 3: Write a function showProfile that prints the username, a default message if bio is null, and a default avatar if avatarUrl is undefined.
function showProfile(profile) {
    var bioMsg = profile.bio === null ? "Bio is not provided" : profile.bio;
    var avatar = profile.avatarUrl === undefined ? "http://default-avatar.com/default.jpg" : profile.avatarUrl;
    console.log("Username: ".concat(profile.username));
    console.log("Bio: ".concat(bioMsg));
    console.log("Avatar URL: ".concat(avatar));
}
showProfile(profile1);
showProfile(profile2);
