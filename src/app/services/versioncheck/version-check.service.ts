import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class VersionCheckService {
  private githubApiUrl = 'https://api.github.com/repos/JoSSte/ScrumTimer/releases/latest';
  private http = inject(HttpClient);


  getLatestReleaseVersion() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.get<any>(this.githubApiUrl).pipe(
      map((release) => release.tag_name.replace(/^v/, '')) // Remove leading 'v' if exists
    );
  }
}