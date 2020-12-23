Hooks.once('setup', () => {

    console.log('P5e | Initializing');
    
    // already standard damage types
    //CONFIG.DND5E.damageTypes['poison'] = 'P5EEXTRA.DamagePoison';
    //CONFIG.DND5E.damageTypes['fire'] = 'P5EEXTRA.DamageFire';
    //CONFIG.DND5E.damageTypes['psychic'] = 'P5EEXTRA.DamagePsychic';
    
    CONFIG.DND5E.damageTypes['righteous'] = 'Righteous';
    CONFIG.DND5E.damageTypes['vile'] = 'Vile';
    CONFIG.DND5E.damageTypes['arcane'] = 'Arcane';

    CONFIG.DND5E.damageResistances['righteous'] = 'Righteous';
    CONFIG.DND5E.damageResistances['vile'] = 'Vile';
    CONFIG.DND5E.damageResistances['arcane'] = 'Arcane';

    CONFIG.DND5E.damageVulnerabilities['righteous'] = 'Righteous';
    CONFIG.DND5E.damageVulnerabilities['vile'] = 'Vile';
    CONFIG.DND5E.damageVulnerabilities['arcane'] = 'Arcane';
    
    });