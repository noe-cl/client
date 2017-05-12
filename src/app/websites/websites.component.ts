import {Component, OnInit} from '@angular/core';
import {Site} from '../news/site';

@Component({
    selector: 'app-websites',
    templateUrl: './websites.component.html',
    styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {

    sites: Site[] = [
        {
            name: 'XIVdb',
            link: 'http://fr.xivdb.com',
            description: 'Base de données FFXIV, la plus à jour et la plus maintenue.'
        },
        {
            name: 'FFXIV Clock',
            link: 'http://fr.ffxivclock.com',
            description: 'Site qui répertorie tous les points de récolte timés et permet de mettre des alertes sur les ' +
            'points qui nous intéressent. Disponible en application mobile.'
        },
        {
            name: 'Le chat a faim',
            link: 'http://fr.ff14angler.com',
            description: 'Toutes les informations sur tous les poissons sont sur ce site ' +
            '(lieu de pêche, heure, météo, etc).'
        },
        {
            name: 'Crafting as a Service',
            link: 'http://fr.craftingasaservice.com',
            description: 'Site de planification de crafts, permet de lister les compos pour un ' +
            'ensemble d\'items, utile pour réaliser des commandes.'
        },
        {
            name: 'Lodestone',
            link: 'http://fr.finalfantasyxiv.com/lodestone/',
            description: 'Toutes les infos sur le jeu, site officiel.'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
