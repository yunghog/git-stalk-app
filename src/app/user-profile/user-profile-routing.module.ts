import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilePage } from './user-profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path:'tabs',
    component: UserProfilePage,
    children: [
      {
        path: '',
        redirectTo: 'repositories',
        pathMatch: 'full'
      },
      {
        path: 'repositories',
        loadChildren: () => import('./repositories/repositories.module').then( m => m.RepositoriesPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'followers',
        loadChildren: () => import('./followers/followers.module').then( m => m.FollowersPageModule)
      },
      {
        path: 'following',
        loadChildren: () => import('./following/following.module').then( m => m.FollowingPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
