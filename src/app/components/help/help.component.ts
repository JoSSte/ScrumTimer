import { Component, OnInit, inject } from '@angular/core';
import { VersionCheckService } from '../../services/versioncheck/version-check.service';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class HelpComponent implements OnInit {
  currentVersion = packageInfo.version;
  latestVersion: string | null = null;
  isNewVersionAvailable = false;

  private versionCheckService = inject(VersionCheckService);

  ngOnInit() {
    this.versionCheckService.getLatestReleaseVersion().subscribe((latest) => {
      this.latestVersion = latest;
      this.isNewVersionAvailable = this.compareVersions(this.currentVersion, latest) < 0;
    });
  }

  compareVersions(v1: string, v2: string): number {
    const toNums = (v: string) => v.split('.').map(Number);
    const [a1, a2, a3] = toNums(v1);
    const [b1, b2, b3] = toNums(v2);
    return a1 - b1 || a2 - b2 || a3 - b3;
  }
}