export const roleHierarchy = {
    'ROLE_SUPER_ADMIN': [
        'ROLE_ADMIN',
        'ROLE_CLIENT',
        'ROLE_AGENT',
        'ROLE_AGENT_LEAD',
        'ROLE_AGENT_LEAD_CITY',
        'ROLE_AGENT_LIVE_CHAT',
        'ROLE_USER',
    ],
    'ROLE_ADMIN': [
        'ROLE_CLIENT',
        'ROLE_AGENT',
        'ROLE_AGENT_LEAD',
        'ROLE_AGENT_LEAD_CITY',
        'ROLE_AGENT_LIVE_CHAT',
        'ROLE_USER',
    ],
    'ROLE_CLIENT': [
        'ROLE_AGENT',
        'ROLE_AGENT_LEAD',
        'ROLE_AGENT_LEAD_CITY',
        'ROLE_AGENT_LIVE_CHAT',
        'ROLE_USER',
    ],
    'ROLE_AGENT': [
        'ROLE_AGENT_LEAD',
        'ROLE_AGENT_LEAD_CITY',
        'ROLE_AGENT_LIVE_CHAT',
        'ROLE_USER',
    ],
    'ROLE_AGENT_LEAD': [
        'ROLE_AGENT_LEAD_CITY',
        'ROLE_USER',
    ],
    'ROLE_AGENT_LEAD_CITY': [
        'ROLE_USER',
    ],
    'ROLE_AGENT_LIVE_CHAT': [
        'ROLE_USER',
    ],
    'ROLE_USER': [
        'IS_AUTHENTICATED_ANONYMOUSLY'
    ],
};

const isGranted = (role, permissions) => {
    if(!permissions) return false;

    let hasPermission = false;

    permissions.split(',').every((p) => {
        if (role === p || roleHierarchy[p].includes(role)) {
            hasPermission = true;
            return false;
        }
        return true;
    });

    return hasPermission;
}

export default isGranted;
