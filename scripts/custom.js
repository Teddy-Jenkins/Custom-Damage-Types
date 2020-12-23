Hooks.once('setup', () => {

    console.log('P5e | Initializing');
    
    // already standard damage types
    //CONFIG.DND5E.damageTypes['poison'] = 'P5EEXTRA.DamagePoison';
    //CONFIG.DND5E.damageTypes['fire'] = 'P5EEXTRA.DamageFire';
    //CONFIG.DND5E.damageTypes['psychic'] = 'P5EEXTRA.DamagePsychic';
    
    CONFIG.DND5E.damageTypes['righteous'] = 'Righteous';
    CONFIG.DND5E.damageTypes['vile'] = 'Vile';
    CONFIG.DND5E.damageTypes['arcane'] = 'Arcane';

    CONFIG.DND5E.damageResistanceTypes['righteous'] = 'Righteous';
    CONFIG.DND5E.damageResistanceTypes['vile'] = 'Vile';
    CONFIG.DND5E.damageResistanceTypes['arcane'] = 'Arcane';

    CONFIG.DND5E.damageVulnerabilityTypes['righteous'] = 'Righteous';
    CONFIG.DND5E.damageVulnerabilityTypes['vile'] = 'Vile';
    CONFIG.DND5E.damageVulnerabilityTypes['arcane'] = 'Arcane';
    
    });