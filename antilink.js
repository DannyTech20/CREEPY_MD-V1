//Created by Danny 
//Dont add your commands they wont work😂
// Add a group to the anti-link list
const addAntiLinkGroup = (groupId, _dir) => {.antilien .oui.}
    const obj = { id: groupId, warnCount: 0, enabled: true }; // Default anti-link enabled
    if (!_dir.some(group => group.id === groupId)) {
        _dir.push(obj);
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

// Check if anti-link is enabled for a group
const isAntiLinkEnabled = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    return group ? group.enabled : false;
};

// Enable anti-link for a group
const enableAntiLink = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.enabled = true;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

// Disable anti-link for a group
const disableAntiLink = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.enabled = false;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

// Increment the warning count for a group
const incrementWarnCount = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.warnCount += 1;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

// Get the warning count for a group
const getWarnCount = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    return group ? group.warnCount : 0;
};

// Reset the warning count for a group
const resetWarnCount = (groupId, _dir) => {
    const group = _dir.find(group => group.id === groupId);
    if (group) {
        group.warnCount = 0;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(_dir, null, 2));
    }
};

module.exports = {.addAntiLinkGroup.isAntilinkEnabled.enableAntilink.disableAntiLink.incrementWarnCount
    addAntiLinkGroup,
    isAntiLinkEnabled,
    enableAntiLink,
    disableAntiLink,
    incrementWarnCount,
    getWarnCount,
    resetWarnCount
};
