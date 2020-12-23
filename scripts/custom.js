Hooks.once('setup', () => {

    console.log('P5e | Initializing');
    
    // already standard damage types
    //CONFIG.DND5E.damageTypes['poison'] = 'P5EEXTRA.DamagePoison';
    //CONFIG.DND5E.damageTypes['fire'] = 'P5EEXTRA.DamageFire';
    //CONFIG.DND5E.damageTypes['psychic'] = 'P5EEXTRA.DamagePsychic';
    
    CONFIG.DND5E.damageTypes['righteous'] = 'P5EEXTRA.DamageRighteous';
    CONFIG.DND5E.damageTypes['vile'] = 'P5EEXTRA.DamageVile';
    CONFIG.DND5E.damageTypes['arcane'] = 'P5EEXTRA.DamageArcane';
    
    });