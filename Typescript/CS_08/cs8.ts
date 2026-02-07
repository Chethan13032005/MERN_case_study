// task 1: Define a type Profile with username (string), bio (string or null), and optional avatarUrl (string).
type Profile ={
    username: string;
    bio: string | null;
    avatarUrl?: string;
}

// task 2: Create two profiles: one with a null bio and no avatar, and one with both fields set.
let profile1:Profile={
    username:"Chethan",
    bio:null
}

let profile2:Profile={
    username:"Ram",
    bio:"Loves coding",
    avatarUrl:"http://example.com/avatar.jpg"
}

// task 3: Write a function showProfile that prints the username, a default message if bio is null, and a default avatar if avatarUrl is undefined.
function showProfile(profile:Profile):void{
    let bioMsg= profile.bio=== null ? "Bio is not provided":profile.bio;
    let avatar=profile.avatarUrl=== undefined ? "http://default-avatar.com/default.jpg":profile.avatarUrl;

    console.log(`Username: ${profile.username}`);
    console.log(`Bio: ${bioMsg}`);
    console.log(`Avatar URL: ${avatar}`);
}

showProfile(profile1);
showProfile(profile2);