import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

export default function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact >Burger Builder</NavigationItem>
            <NavigationItem link='/orders'>Checkout</NavigationItem>
        </ul>
    )
}
