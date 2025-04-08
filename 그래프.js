import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int N = sc.nextInt(); // 정점의 개수
		int M = sc.nextInt(); // 간선의 개수

		List<List<Integer>> G = new ArrayList<>();
		for (int i = 0; i <= N; i++) {
			G.add(new ArrayList<>());
		}

		for (int i = 0; i < M; i++) {
			int s = sc.nextInt();
			int e = sc.nextInt();
			/*
			간선의 뱡향성이 단 반향이다 혹은 양방향이다
			이런 내용을 제시해줍니다.
			반드시 제시가 되어야 한다. 안되어 있다면 클레임 걸어야합니다.
			*/
			G.get(s).add(e);
			// G.get(e).add(s);
		}
		// 그래프 선언 파트
		/*
		흐름을 이해해도 되고, 외우셔야합니다.
		다만, 외우실 때 변형되는 포인트를 같이 이해하고 외우면 좋다.
		*/
		boolean[] V = new boolean[N + 1];
		// V라는 변수가 있다!.
		/*
		이동을 성공한 노드에 대한 표시 입니다.
		탐색 후보에 노드를 추가할 때, 이미 탐색했거나, 이미 탐색 후보에 노드가 추가 되어 있는
		경우가 있엇죠?
		
		이런 경우를 위해 탐색 후보에 올라갔을 때, 체크 표시를 한다.
		그러면 다음에 탐색을 할 때 체크 표시를 보고 탐색 후보에 올리지 않는다.
		
		그거를 관리해주는 바로 "방문 관리 변수" 
		
		- - - - - - - -
		BFS와 DFS의 차이는 탐색 후보에 대한 우선 순위 정의이다.
		그래서 탐색 후보를 관리하는 자료 구조가 다르다
		BFS는 QUEUE
		DFS는 STACK
		*/
		Queue<Integer> q = new LinkedList<>();
		q.add(1);
		V[1] = true; // 이미 탐색에 성공을 했잖아요..

		while (!q.isEmpty()) { //더 ㅣ상 탐색할 정점이 없르 때 까지..
			int current_Node = q.poll(); // del, insert 이러거 사용하지 마세요..
			System.out.println(current_Node);

			for (int next_Node : G.get(current_Node)) {
				/*
				next_node가 바로 현재 노드에서 이동할 수 있는 노드들의 후보
				1 -> [2, 3]
				2 -> []
				for next_node -> [2, 3]
				
				IF 탐색 조건이 추가 되요. 4번 노드는 이동 못해.
				Next_node는 현재 노드 이 외의 모든 노드예요.
				4번 노드는 현재 노드에인가요?
				아니죠
				
				*/
				if (!V[next_Node] && next_Node != 4) {
					q.add(next_Node);
					V[next_Node] = true;
				}
			}
		}
	}
}
