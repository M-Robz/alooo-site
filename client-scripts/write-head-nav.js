function writeHeadNav() {

document.write('<header>');
document.write('		<img src="images/orange_black_hat_100.gif" title="Conquistadors">');
document.write('		<img src="images/decimators_90.jpg" title="Dwarven Decimators">');
document.write('		<img src="images/mrobz_v3_100.png" title="Mookies">');
document.write('		<img src="images/possums_192.jpg" title="Pissed Off Possums">');
document.write('	<a class="menuButton" href="javascript:toggleMainNavVis()">');
document.write('		<svg>');
document.write('			<rect x="0" y="0" height="10px" width="45px" />');
document.write('			<rect x="0" y="18" height="10px" width="45px" />');
document.write('			<rect x="0" y="36" height="10px" width="45px" />');
document.write('		</svg>');
document.write('	</a>');
document.write('			<a href="voting-history.html">Voting</a>');
document.write('	<div class="navItem">');
document.write('		<a href="https://www.youtube.com/channel/UCBQcydkrNgx1b7QU1chd45g" target="_blank">Podcast</a>');
document.write('	</div>');
document.write('			<a href="roto15.html">2015</a>');
document.write('			<a href="roto16.html">2016</a>');
document.write('	<div class="navItem">');
document.write('		<a href="files/salary_planner_2016.xlsx">Salary Planner</a>');
document.write('	</div>');
document.write('			<a href="files/keepers15.xlsx">2015</a>');
document.write('			<a href="files/keepers16.xlsx">2016</a>');
document.write('			<a href="draftresults15.html">2015</a>');
document.write('			<a href="rosters15-16.html">2015-16</a>');
document.write('	<div class="navItem">');
document.write('		<a href="javascript:toggleSubNav('+"'"+'expansion'+"'"+')">Expansion</a>');
document.write('		<div class="subNav" id="expansion" style="visibility:hidden" onmouseleave="closeSubNav('+"'"+'expansion'+"'"+')">');
document.write('			<span>Expansion</span>');
document.write('			<a href="files/expansion_draft_15.xlsx">2015&nbsp;Draft&nbsp;Results</a>');
document.write('			<a href="files/protected_players_15.xlsx">2015&nbsp;Protected&nbsp;Players</a>');
document.write('			<a href="files/expansion_sandbox.xlsx">2015&nbsp;Expansion&nbsp;"Sandbox"</a>');
document.write('		</div>');
document.write('	</div>');

}