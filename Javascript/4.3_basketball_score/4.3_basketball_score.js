const johnTeam = 89 +  120 + 103;
const mikeTeam = 116 + 94 + 123;

const johnTeamAverage = johnTeam / 3;
const mikeTeamAverage = mikeTeam / 3;

if(johnTeamAverage > mikeTeamAverage){
    console.log("John's team wins with an average score of " + johnTeamAverage);
}
else if(mikeTeamAverage > johnTeamAverage){
    console.log("Mike's team wins with an average score of " + mikeTeamAverage);
}
else{
    console.log("It's a draw");
}

const maryTeam = 97 + 134 + 105;
const maryTeamAverage = maryTeam / 3;

if(johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage){
    console.log("John's team wins with an average score of " + johnTeamAverage);
}
else if(mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage){
    console.log("Mike's team wins with an average score of " + mikeTeamAverage);
}
else if(maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage){
    console.log("Mary's team wins with an average score of " + maryTeamAverage);
}
else{
    console.log("It's a draw");
}