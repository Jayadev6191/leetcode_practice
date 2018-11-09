/* 
    Two strings are considered as anagrams when their characters
    can be rearranged to form the same word 
*/

function checkAnagram(s1, s2) {
    var map = {};

    for(var i = 0; i < s1.length; i++ ) {
        if(map[s1[i]]) {
            map[s1[i]]++;
        } else {
            map[s1[i]] = 1;   
        }
    }

    for(var j = 0; j < s2.length; j++ ) {
        if(map[s2[j]]) {
            map[s2[j]]--;
        }
    }
    

    // Object.values(map).forEach(element => {
    //     if(element !== 0) return false;
    // });

    // return true;
}

console.log(checkAnagram("anagram", "nagaram"));